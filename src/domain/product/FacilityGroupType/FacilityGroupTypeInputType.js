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

const FacilityGroupTypeInputType = new GraphQLInputObjectType({
  name: 'FacilityGroupTypeInputType',
  description: 'input type for FacilityGroupType',

  fields: () => ({
    description: {type: GraphQLString},
    facilityGroupTypeId: {type: GraphQLString}
  })
});

export {FacilityGroupTypeInputType};
    