import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean,
} from 'graphql';

const LoggedInPersonType = new GraphQLObjectType({
  name: 'LoggedInPerson',
  description: '...',

  fields: () => ({
    personalTitle: { type: GraphQLString },
    firstName: { type: GraphQLString },
    middleName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    nickname: { type: GraphQLString },
    gender: { type: GraphQLString },
    birthDate: { type: GraphQLString },
    authorities: { type: new GraphQLList(GraphQLString) }
  })
});

export { LoggedInPersonType };