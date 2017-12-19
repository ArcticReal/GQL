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

const ProductMaintTypeInputType = new GraphQLInputObjectType({
  name: 'ProductMaintTypeInputType',
  description: 'input type for ProductMaintType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    productMaintTypeId: {type: GraphQLString}
  })
});

export {ProductMaintTypeInputType};
    