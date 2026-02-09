"use client";

import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Loader2, MapPin } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface PlaceSuggestion {
  display_name: string;
  place_id: string;
}

interface PlaceAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  "aria-invalid"?: boolean;
  className?: string;
}

export function PlaceAutocomplete({
  value,
  onChange,
  placeholder = "Search for a place...",
  id,
  "aria-invalid": ariaInvalid,
  className,
}: PlaceAutocompleteProps) {
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const fetchSuggestions = useCallback(async (query: string) => {
    if (query.length < 3) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1`,
        {
          headers: {
            "Accept-Language": "en",
          },
        },
      );
      const data = await response.json();
      setSuggestions(data);
      setOpen(data.length > 0);
    } catch (error) {
      console.error("Error fetching place suggestions:", error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      fetchSuggestions(newValue);
    }, 300);
  };

  const handleSelectPlace = (place: PlaceSuggestion) => {
    setInputValue(place.display_name);
    onChange(place.display_name);
    setSuggestions([]);
    setOpen(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor asChild>
        <div className="relative w-full">
          <Input
            id={id}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={() => {
              if (suggestions.length > 0) setOpen(true);
            }}
            placeholder={placeholder}
            autoComplete="off"
            aria-invalid={ariaInvalid}
            className={cn("pr-8", className)}
          />
          <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
            {loading ? (
              <Loader2 className="text-muted-foreground h-4 w-4 animate-spin" />
            ) : (
              <MapPin className="text-muted-foreground h-4 w-4" />
            )}
          </div>
        </div>
      </PopoverAnchor>

      <PopoverContent align="start" onOpenAutoFocus={(e) => e.preventDefault()}>
        {suggestions.length > 0 ? (
          <ul className="max-h-60 overflow-auto">
            {suggestions.map((place) => (
              <li
                key={place.place_id}
                className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center gap-2 rounded-sm px-2 py-2 text-sm"
                onClick={() => handleSelectPlace(place)}
                onMouseDown={(e) => e.preventDefault()}
              >
                <MapPin className="text-muted-foreground h-4 w-4 shrink-0" />
                <span className="line-clamp-2">{place.display_name}</span>
              </li>
            ))}
          </ul>
        ) : loading ? (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="text-muted-foreground h-5 w-5 animate-spin" />
          </div>
        ) : null}
      </PopoverContent>
    </Popover>
  );
}
