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

const ReturnItemTypeMapInputType = new GraphQLInputObjectType({
  name: 'ReturnItemTypeMapInputType',
  description: 'input type for ReturnItemTypeMap',

  fields: () => ({
    returnHeaderTypeId: {type: GraphQLString},
    returnItemMapKey: {type: GraphQLString},
    returnItemTypeId: {type: GraphQLString}
  })
});

export {ReturnItemTypeMapInputType};
    