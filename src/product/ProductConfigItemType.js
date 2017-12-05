
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ProductConfigItem = new GraphQLObjectType({
  name: 'ProductConfigItemType',
  description: 'Type for ProductConfigItem in product',

  fields: () => ({
    configItemId: {type: GraphQLString},
    longDescription: {type: GraphQLString},
    imageUrl: {type: GraphQLString},
    configItemName: {type: GraphQLString},
    configItemTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ProductConfigItem};
    