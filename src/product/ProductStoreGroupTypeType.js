
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ProductStoreGroupType = new GraphQLObjectType({
  name: 'ProductStoreGroupTypeType',
  description: 'Type for ProductStoreGroupType in product',

  fields: () => ({
    productStoreGroupTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ProductStoreGroupType};
    