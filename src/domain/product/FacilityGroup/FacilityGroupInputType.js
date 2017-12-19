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

const FacilityGroupInputType = new GraphQLInputObjectType({
  name: 'FacilityGroupInputType',
  description: 'input type for FacilityGroup',

  fields: () => ({
    description: {type: GraphQLString},
    facilityGroupId: {type: GraphQLString},
    facilityGroupName: {type: GraphQLString},
    facilityGroupTypeId: {type: GraphQLString},
    primaryParentGroupId: {type: GraphQLString}
  })
});

export {FacilityGroupInputType};
    