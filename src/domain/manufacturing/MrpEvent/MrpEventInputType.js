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

const MrpEventInputType = new GraphQLInputObjectType({
  name: 'MrpEventInputType',
  description: 'input type for MrpEvent',

  fields: () => ({
    eventDate: {type: GraphQLString},
    eventName: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    isLate: {type: GraphQLBoolean},
    mrpEventTypeId: {type: GraphQLString},
    mrpId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat}
  })
});

export {MrpEventInputType};
    