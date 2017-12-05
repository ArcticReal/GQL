
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ProductFeatureGroup = new GraphQLObjectType({
  name: 'ProductFeatureGroupType',
  description: 'Type for ProductFeatureGroup in product',

  fields: () => ({
    description: {type: GraphQLString},
    productFeatureGroupId: {type: GraphQLString}
  })
});

export {ProductFeatureGroup};
    