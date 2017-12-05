
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ProductPriceType = new GraphQLObjectType({
  name: 'ProductPriceTypeType',
  description: 'Type for ProductPriceType in product',

  fields: () => ({
    description: {type: GraphQLString},
    productPriceTypeId: {type: GraphQLString}
  })
});

export {ProductPriceType};
    