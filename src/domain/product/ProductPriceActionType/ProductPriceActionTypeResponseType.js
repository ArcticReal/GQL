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

const ProductPriceActionTypeResponseType = new GraphQLObjectType({
  name: 'ProductPriceActionTypeResponseType',
  description: 'response type for ProductPriceActionType',

  fields: () => ({
    description: {type: GraphQLString},
    productPriceActionTypeId: {type: GraphQLString}
  })
});

export {ProductPriceActionTypeResponseType};
    