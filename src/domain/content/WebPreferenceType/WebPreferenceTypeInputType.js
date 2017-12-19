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

const WebPreferenceTypeInputType = new GraphQLInputObjectType({
  name: 'WebPreferenceTypeInputType',
  description: 'input type for WebPreferenceType',

  fields: () => ({
    description: {type: GraphQLString},
    webPreferenceTypeId: {type: GraphQLString}
  })
});

export {WebPreferenceTypeInputType};
    