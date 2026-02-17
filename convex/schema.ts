import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    phone: v.optional(v.string()),
    sex: v.optional(
      v.union(v.literal("male"), v.literal("female"), v.literal("other")),
    ),
    dateOfBirth: v.optional(v.string()),
    timeOfBirth: v.optional(v.string()),
    placeOfBirth: v.optional(v.string()),
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
    difficulty: v.union(v.literal("beginner"), v.literal("advanced")),
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

  orders: defineTable({
    userId: v.string(),
    userEmail: v.string(),
    userPhone: v.string(),
    itemIds: v.array(v.id("courses")),
    amount: v.number(),
    orderId: v.string(),
    paymentId: v.optional(v.string()),
    status: v.union(
      v.literal("pending"),
      v.literal("paid"),
      v.literal("failed"),
    ),
  }).index("by_order_id", ["orderId"]),

  bookings: defineTable({
    userId: v.string(),
    userEmail: v.string(),
    userPhone: v.string(),
    serviceType: v.string(),
    message: v.optional(v.string()),
    amount: v.number(),
    orderId: v.string(),
    paymentId: v.optional(v.string()),
    status: v.union(
      v.literal("pending"),
      v.literal("paid"),
      v.literal("failed"),
    ),
  }).index("by_order_id", ["orderId"]),
});
