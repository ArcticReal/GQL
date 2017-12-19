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

const ProductPriceActionTypeInputType = new GraphQLInputObjectType({
  name: 'ProductPriceActionTypeInputType',
  description: 'input type for ProductPriceActionType',

  fields: () => ({
    description: {type: GraphQLString},
    productPriceActionTypeId: {type: GraphQLString}
  })
});

export {ProductPriceActionTypeInputType};
    