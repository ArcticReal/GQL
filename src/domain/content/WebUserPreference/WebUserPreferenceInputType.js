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

const WebUserPreferenceInputType = new GraphQLInputObjectType({
  name: 'WebUserPreferenceInputType',
  description: 'input type for WebUserPreference',

  fields: () => ({
    partyId: {type: GraphQLString},
    userLoginId: {type: GraphQLString},
    visitId: {type: GraphQLString},
    webPreferenceTypeId: {type: GraphQLString},
    webPreferenceValue: {type: GraphQLString}
  })
});

export {WebUserPreferenceInputType};
    