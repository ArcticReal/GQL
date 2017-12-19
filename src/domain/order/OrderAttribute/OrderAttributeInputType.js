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

const OrderAttributeInputType = new GraphQLInputObjectType({
  name: 'OrderAttributeInputType',
  description: 'input type for OrderAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    orderId: {type: GraphQLString}
  })
});

export {OrderAttributeInputType};
    