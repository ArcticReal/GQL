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

const ReturnItemTypeInputType = new GraphQLInputObjectType({
  name: 'ReturnItemTypeInputType',
  description: 'input type for ReturnItemType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    returnItemTypeId: {type: GraphQLString}
  })
});

export {ReturnItemTypeInputType};
    