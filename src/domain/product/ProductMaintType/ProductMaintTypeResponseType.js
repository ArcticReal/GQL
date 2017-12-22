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

const ProductMaintTypeResponseType = new GraphQLObjectType({
  name: 'ProductMaintTypeResponseType',
  description: 'response type for ProductMaintType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    productMaintTypeId: {type: GraphQLString}
  })
});

export {ProductMaintTypeResponseType};
    