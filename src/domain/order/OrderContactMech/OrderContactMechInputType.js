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

const OrderContactMechInputType = new GraphQLInputObjectType({
  name: 'OrderContactMechInputType',
  description: 'input type for OrderContactMech',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    contactMechPurposeTypeId: {type: GraphQLString},
    orderId: {type: GraphQLString}
  })
});

export {OrderContactMechInputType};
    