import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    role: v.union(v.literal("user"), v.literal("admin")),
  }).index("by_clerk_id", ["clerkId"]),

  courses: defineTable({
    title: v.string(),
    slug: v.string(),
    description: v.string(),
    about: v.string(),
    price: v.number(),
    discount: v.optional(v.number()),
    duration: v.string(),
    imageId: v.id("_storage"),
    imageUrl: v.nullable(v.string()),
  }).index("by_slug", ["slug"]),

  cartItems: defineTable({
    userId: v.optional(v.string()),
    guestId: v.optional(v.string()),
    courseId: v.id("courses"),
  })
    .index("by_user_course", ["userId", "courseId"])
    .index("by_guest_course", ["guestId", "courseId"])
    .index("by_user", ["userId"])
    .index("by_guest", ["guestId"]),
});
