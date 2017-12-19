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

const EmploymentAppInputType = new GraphQLInputObjectType({
  name: 'EmploymentAppInputType',
  description: 'input type for EmploymentApp',

  fields: () => ({
    applicationDate: {type: GraphQLString},
    applicationId: {type: GraphQLString},
    applyingPartyId: {type: GraphQLString},
    approverPartyId: {type: GraphQLString},
    emplPositionId: {type: GraphQLString},
    employmentAppSourceTypeId: {type: GraphQLString},
    jobRequisitionId: {type: GraphQLString},
    referredByPartyId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {EmploymentAppInputType};
    