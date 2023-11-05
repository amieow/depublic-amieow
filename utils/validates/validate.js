import { z } from "zod";
import { UNICODE } from "./user/default";

const searcyQuerySchema = z
	.string()
	.min(1)
	.max(20)
	.refine((str) => !str.split("").find((v) => UNICODE.includes(v)), {
		message: "Query tidak boleh ada unikKode",
	});

export { searcyQuerySchema };
