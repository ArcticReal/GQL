
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ProductMeterType = new GraphQLObjectType({
  name: 'ProductMeterTypeType',
  description: 'Type for ProductMeterType in product',

  fields: () => ({
    defaultUomId: {type: GraphQLString},
    productMeterTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ProductMeterType};
    