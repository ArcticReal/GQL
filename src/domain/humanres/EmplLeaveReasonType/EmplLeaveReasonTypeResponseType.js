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

const EmplLeaveReasonTypeResponseType = new GraphQLObjectType({
  name: 'EmplLeaveReasonTypeResponseType',
  description: 'response type for EmplLeaveReasonType',

  fields: () => ({
    description: {type: GraphQLString},
    emplLeaveReasonTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {EmplLeaveReasonTypeResponseType};
    