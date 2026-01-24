import { v, Validator } from "convex/values";
import { UserJSON } from "@clerk/backend";
import { internalMutation } from "./_generated/server";

export const upsertFromClerk = internalMutation({
  args: { data: v.any() as Validator<UserJSON> },
  handler: async (ctx, args) => {
    const userAttributes = {
      clerkId: args.data.id,
      email: args.data.email_addresses[0].email_address,
      name: `${args.data.first_name} ${args.data.last_name}`,
      imageUrl: args.data.image_url,
      role: "user" as const,
    };

    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.data.id))
      .unique();

    if (existingUser === null) {
      await ctx.db.insert("users", userAttributes);
    } else {
      await ctx.db.patch(existingUser._id, userAttributes);
    }
  },
});

export const deleteFromClerk = internalMutation({
  args: { clerkId: v.string() },
  handler: async (ctx, { clerkId }) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", clerkId))
      .unique();

    if (user !== null) {
      await ctx.db.delete(user._id);
    } else {
      console.warn(
        `Can't delete user, there is none for Clerk user ID: ${clerkId}`,
      );
    }
  },
});
