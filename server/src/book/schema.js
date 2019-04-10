import { addMockFunctionsToSchema, makeExecutableSchema } from "apollo-server";
import { type, query } from "./schema/index";

const schema = makeExecutableSchema({
	typeDefs: [type, query]
});
addMockFunctionsToSchema({ schema: schema });

export { schema };