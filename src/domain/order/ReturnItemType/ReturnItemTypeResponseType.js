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

const ReturnItemTypeResponseType = new GraphQLObjectType({
  name: 'ReturnItemTypeResponseType',
  description: 'response type for ReturnItemType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    returnItemTypeId: {type: GraphQLString}
  })
});

export {ReturnItemTypeResponseType};
    