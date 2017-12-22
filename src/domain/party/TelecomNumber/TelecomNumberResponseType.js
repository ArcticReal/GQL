import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const TelecomNumberResponseType = new GraphQLObjectType({
  name: 'TelecomNumberResponseType',
  description: 'response type for TelecomNumber',

  fields: () => ({
    areaCode: {type: GraphQLString},
    askForName: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    contactNumber: {type: GraphQLString},
    countryCode: {type: GraphQLString}
  })
});

export {TelecomNumberResponseType};
    