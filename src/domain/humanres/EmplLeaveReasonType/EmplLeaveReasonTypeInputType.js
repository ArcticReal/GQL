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

const EmplLeaveReasonTypeInputType = new GraphQLInputObjectType({
  name: 'EmplLeaveReasonTypeInputType',
  description: 'input type for EmplLeaveReasonType',

  fields: () => ({
    description: {type: GraphQLString},
    emplLeaveReasonTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {EmplLeaveReasonTypeInputType};
    