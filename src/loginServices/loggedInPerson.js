import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean,
} from 'graphql';

const LoggedInPersonType = new GraphQLObjectType({
  name: 'LoggedInPerson',
  description: '...',

  fields: () => ({
    personalTitle: { type: GraphQLString },
    firstName: { type: GraphQLString },
    nickname: { type: GraphQLString },
    middleName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    gender: { type: GraphQLString },
    birthDate: { type: GraphQLString },
    emailAddress: { type: GraphQLString },
    userLoginId: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    currentPassword: { type: GraphQLString },
    passwordRetype: { type: GraphQLString },
    toName: { type: GraphQLString },
    address1: { type: GraphQLString },
    houseNumber: { type: GraphQLString },
    postalCode: { type: GraphQLString },
    city: { type: GraphQLString },
    countryGeoId: { type: GraphQLString },
    stateGeoId: { type: GraphQLString },
    authorities: { type: new GraphQLList(GraphQLString) }
  })
});

export { LoggedInPersonType };