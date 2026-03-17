import { Id } from "./_generated/dataModel";
import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = internalMutation({
  args: {
    user_id: v.string(),
    email: v.string(),
    first_name: v.string(),
    last_name: v.optional(v.string()),
    image_url: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userExists = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("user_id"), args.user_id))
      .unique();

    if (userExists) {
      return;
    } else {
      await ctx.db.insert("users", { ...args });
    }
  },
});

export const deleteUser = internalMutation({
  args: {
    user_id: v.string(),
  },
  handler: async (ctx, args) => {
    const userExists = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("user_id"), args.user_id))
      .unique();

    if (!userExists) {
      throw new Error("User data invalid. User does not exists.");
    }

    await ctx.db.delete("users", args.user_id as Id<"users">);
  },
});
