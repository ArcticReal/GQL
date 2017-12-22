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

const WebUserPreferenceResponseType = new GraphQLObjectType({
  name: 'WebUserPreferenceResponseType',
  description: 'response type for WebUserPreference',

  fields: () => ({
    partyId: {type: GraphQLString},
    userLoginId: {type: GraphQLString},
    visitId: {type: GraphQLString},
    webPreferenceTypeId: {type: GraphQLString},
    webPreferenceValue: {type: GraphQLString}
  })
});

export {WebUserPreferenceResponseType};
    