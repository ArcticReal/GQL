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

const FacilityGroupRollupInputType = new GraphQLInputObjectType({
  name: 'FacilityGroupRollupInputType',
  description: 'input type for FacilityGroupRollup',

  fields: () => ({
    facilityGroupId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    parentFacilityGroupId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityGroupRollupInputType};
    