
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const SubscriptionActivity = new GraphQLObjectType({
  name: 'SubscriptionActivityType',
  description: 'Type for SubscriptionActivity in product',

  fields: () => ({
    comments: {type: GraphQLString},
    subscriptionActivityId: {type: GraphQLString},
    dateSent: {type: GraphQLString}
  })
});

export {SubscriptionActivity};
    