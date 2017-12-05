
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const FacilityGroupType = new GraphQLObjectType({
  name: 'FacilityGroupTypeType',
  description: 'Type for FacilityGroupType in product',

  fields: () => ({
    facilityGroupTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {FacilityGroupType};
    