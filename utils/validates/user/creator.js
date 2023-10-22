export const CreatorSchema = UserSchema.and(
  z.object({
    events: z.string().array(),
    role: z.enum(["creator"]),
    sosmed: UserSchema.shape.sosmed.and(
      z.object({
        public_email: z.string(),
      }),
    ),
  }),
);