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

const SubscriptionAttributeResponseType = new GraphQLObjectType({
  name: 'SubscriptionAttributeResponseType',
  description: 'response type for SubscriptionAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    subscriptionId: {type: GraphQLString}
  })
});

export {SubscriptionAttributeResponseType};
    