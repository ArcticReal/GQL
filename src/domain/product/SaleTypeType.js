
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const SaleTypeType = new GraphQLObjectType({
  name: 'SaleTypeType',
  description: 'Type for SaleType in product',

  fields: () => ({
    saleTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {SaleTypeType};
    