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

const ProductPricePurposeInputType = new GraphQLInputObjectType({
  name: 'ProductPricePurposeInputType',
  description: 'input type for ProductPricePurpose',

  fields: () => ({
    description: {type: GraphQLString},
    productPricePurposeId: {type: GraphQLString}
  })
});

export {ProductPricePurposeInputType};
    