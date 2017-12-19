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

const ProductContentInputType = new GraphQLInputObjectType({
  name: 'ProductContentInputType',
  description: 'input type for ProductContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productContentTypeId: {type: GraphQLString},
    productId: {type: GraphQLString},
    purchaseFromDate: {type: GraphQLString},
    purchaseThruDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString},
    useCountLimit: {type: GraphQLInt},
    useRoleTypeId: {type: GraphQLString},
    useTime: {type: GraphQLInt},
    useTimeUomId: {type: GraphQLString}
  })
});

export {ProductContentInputType};
    