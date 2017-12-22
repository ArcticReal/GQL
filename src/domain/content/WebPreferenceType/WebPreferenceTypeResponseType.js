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

const WebPreferenceTypeResponseType = new GraphQLObjectType({
  name: 'WebPreferenceTypeResponseType',
  description: 'response type for WebPreferenceType',

  fields: () => ({
    description: {type: GraphQLString},
    webPreferenceTypeId: {type: GraphQLString}
  })
});

export {WebPreferenceTypeResponseType};
    