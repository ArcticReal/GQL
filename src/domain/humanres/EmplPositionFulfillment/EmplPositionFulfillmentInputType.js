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

const EmplPositionFulfillmentInputType = new GraphQLInputObjectType({
  name: 'EmplPositionFulfillmentInputType',
  description: 'input type for EmplPositionFulfillment',

  fields: () => ({
    comments: {type: GraphQLString},
    emplPositionId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionFulfillmentInputType};
    