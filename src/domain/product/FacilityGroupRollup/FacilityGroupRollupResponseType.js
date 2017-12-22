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

const FacilityGroupRollupResponseType = new GraphQLObjectType({
  name: 'FacilityGroupRollupResponseType',
  description: 'response type for FacilityGroupRollup',

  fields: () => ({
    facilityGroupId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    parentFacilityGroupId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityGroupRollupResponseType};
    