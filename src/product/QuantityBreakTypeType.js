
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const QuantityBreakType = new GraphQLObjectType({
  name: 'QuantityBreakTypeType',
  description: 'Type for QuantityBreakType in product',

  fields: () => ({
    quantityBreakTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {QuantityBreakType};
    