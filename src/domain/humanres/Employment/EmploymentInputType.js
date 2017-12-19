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

const EmploymentInputType = new GraphQLInputObjectType({
  name: 'EmploymentInputType',
  description: 'input type for Employment',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    roleTypeIdFrom: {type: GraphQLString},
    roleTypeIdTo: {type: GraphQLString},
    terminationReasonId: {type: GraphQLString},
    terminationTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {EmploymentInputType};
    