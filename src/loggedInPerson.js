import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean,
} from 'graphql';

const LoggedInPersonType = new GraphQLObjectType({
  name: 'LoggedInPerson',
  description: '...',

  fields: () => ({
    firstName: { type: GraphQLString }
  })
});

export { LoggedInPersonType };
