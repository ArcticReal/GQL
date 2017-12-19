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

const OrderContentTypeInputType = new GraphQLInputObjectType({
  name: 'OrderContentTypeInputType',
  description: 'input type for OrderContentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    orderContentTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {OrderContentTypeInputType};
    