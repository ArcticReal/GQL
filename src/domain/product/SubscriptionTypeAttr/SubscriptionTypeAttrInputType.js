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

const SubscriptionTypeAttrInputType = new GraphQLInputObjectType({
  name: 'SubscriptionTypeAttrInputType',
  description: 'input type for SubscriptionTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    subscriptionTypeId: {type: GraphQLString}
  })
});

export {SubscriptionTypeAttrInputType};
    