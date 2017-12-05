
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ProductPriceActionType = new GraphQLObjectType({
  name: 'ProductPriceActionTypeType',
  description: 'Type for ProductPriceActionType in product',

  fields: () => ({
    description: {type: GraphQLString},
    productPriceActionTypeId: {type: GraphQLString}
  })
});

export {ProductPriceActionType};
    