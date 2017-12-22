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

const PersonTrainingResponseType = new GraphQLObjectType({
  name: 'PersonTrainingResponseType',
  description: 'response type for PersonTraining',

  fields: () => ({
    approvalStatus: {type: GraphQLString},
    approverId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    reason: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    trainingClassTypeId: {type: GraphQLString},
    trainingRequestId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {PersonTrainingResponseType};
    