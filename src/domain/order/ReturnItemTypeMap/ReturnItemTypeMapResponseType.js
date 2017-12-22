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

const ReturnItemTypeMapResponseType = new GraphQLObjectType({
  name: 'ReturnItemTypeMapResponseType',
  description: 'response type for ReturnItemTypeMap',

  fields: () => ({
    returnHeaderTypeId: {type: GraphQLString},
    returnItemMapKey: {type: GraphQLString},
    returnItemTypeId: {type: GraphQLString}
  })
});

export {ReturnItemTypeMapResponseType};
    