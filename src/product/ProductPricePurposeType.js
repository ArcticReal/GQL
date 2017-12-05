
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ProductPricePurpose = new GraphQLObjectType({
  name: 'ProductPricePurposeType',
  description: 'Type for ProductPricePurpose in product',

  fields: () => ({
    description: {type: GraphQLString},
    productPricePurposeId: {type: GraphQLString}
  })
});

export {ProductPricePurpose};
    