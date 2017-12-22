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

const OrderContactMechResponseType = new GraphQLObjectType({
  name: 'OrderContactMechResponseType',
  description: 'response type for OrderContactMech',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    contactMechPurposeTypeId: {type: GraphQLString},
    orderId: {type: GraphQLString}
  })
});

export {OrderContactMechResponseType};
    